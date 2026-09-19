import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh9o9fbas.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dh9o9fbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:credit-card-plus-alt"} {...others} />);
}

export default Component;
