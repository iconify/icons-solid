import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feabg3bhd.css';
import '../../css/x/x4gpywx5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="feabg3bhd"/><path class="x4gpywx5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trash-square-fill"} {...others} />);
}

export default Component;
