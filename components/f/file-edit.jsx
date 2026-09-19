import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1jr9rmik.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z1jr9rmik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:file-edit"} {...others} />);
}

export default Component;
