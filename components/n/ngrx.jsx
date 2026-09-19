import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-50yz2xi.css';

const viewBox = {"width":478,"height":512};
const content = `<path clip-rule="evenodd" class="b-50yz2xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:ngrx"} {...others} />);
}

export default Component;
