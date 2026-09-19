import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6chq9yvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l6chq9yvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:volume-max-filled"} {...others} />);
}

export default Component;
