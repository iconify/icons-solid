import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm5s8mbbt.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fm5s8mbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circle-letter-g"} {...others} />);
}

export default Component;
