import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk8hfnr0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk8hfnr0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:arrow-up-square-fill"} {...others} />);
}

export default Component;
