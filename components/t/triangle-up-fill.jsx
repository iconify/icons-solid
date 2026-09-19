import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg52xz9ai.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qg52xz9ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:triangle-up-fill"} {...others} />);
}

export default Component;
