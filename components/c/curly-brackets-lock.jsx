import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4z2qobvk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="o4z2qobvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:curly-brackets-lock"} {...others} />);
}

export default Component;
