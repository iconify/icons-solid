import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z86v6i08k.css';
import '../../css/u/uf6zebb2f.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="z86v6i08k"/><path class="uf6zebb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yubal-light"} {...others} />);
}

export default Component;
