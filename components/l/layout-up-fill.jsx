import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncm8dqb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ncm8dqb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:layout-up-fill"} {...others} />);
}

export default Component;
