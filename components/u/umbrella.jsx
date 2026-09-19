import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3v73bb-u.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="a3v73bb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:umbrella"} {...others} />);
}

export default Component;
