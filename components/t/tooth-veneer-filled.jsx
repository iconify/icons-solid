import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mij9qtw9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mij9qtw9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tooth-veneer-filled"} {...others} />);
}

export default Component;
