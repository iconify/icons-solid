import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whvhgnftn.css';
import '../../css/n/nr45wil8i.css';
import '../../css/x/xi8s70b8m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="whvhgnftn"/><path class="nr45wil8i"/><path class="xi8s70b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:memo"} {...others} />);
}

export default Component;
