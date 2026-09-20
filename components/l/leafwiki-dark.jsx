import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjbeumbky.css';
import '../../css/c/ckze4557m.css';
import '../../css/o/o4qlo11nz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yjbeumbky"/><path class="ckze4557m"/><path class="o4qlo11nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:leafwiki-dark"} {...others} />);
}

export default Component;
