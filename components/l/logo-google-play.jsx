import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_-jwob6s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="b_-jwob6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-google-play"} {...others} />);
}

export default Component;
