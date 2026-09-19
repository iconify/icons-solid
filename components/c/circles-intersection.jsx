import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7z6ubbny.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h7z6ubbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:circles-intersection"} {...others} />);
}

export default Component;
