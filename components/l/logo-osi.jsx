import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2c-5ubrt.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r2c-5ubrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-osi"} {...others} />);
}

export default Component;
