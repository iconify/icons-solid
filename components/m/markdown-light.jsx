import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a89cky7-t.css';
import '../../css/a/ajlhn96ks.css';

const viewBox = {"width":208,"height":128};
const content = `<path clip-rule="evenodd" class="a89cky7-t"/><path class="ajlhn96ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:markdown-light"} {...others} />);
}

export default Component;
