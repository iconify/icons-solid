import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jefd25bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jefd25bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:svg"} {...others} />);
}

export default Component;
