import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2u47pbtq.css';
import '../../css/p/pdguunnht.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f2u47pbtq"/><path class="pdguunnht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-boolean-light"} {...others} />);
}

export default Component;
