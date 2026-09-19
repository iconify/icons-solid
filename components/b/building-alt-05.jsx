import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iodzf6bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iodzf6bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:building-alt-05"} {...others} />);
}

export default Component;
