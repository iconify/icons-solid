import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3peti11w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q3peti11w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:eye-slash"} {...others} />);
}

export default Component;
