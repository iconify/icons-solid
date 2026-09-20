import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojipf5b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ojipf5b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:some-tommelned"} {...others} />);
}

export default Component;
