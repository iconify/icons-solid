import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-zmvebwi.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r-zmvebwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-up-from-square-slash"} {...others} />);
}

export default Component;
