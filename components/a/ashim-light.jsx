import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obl14qb3f.css';
import '../../css/x/xz9r6ubpj.css';
import '../../css/c/c5cfbqbfc.css';
import '../../css/s/st-tcinvp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="obl14qb3f"/><path class="xz9r6ubpj"/><path class="c5cfbqbfc"/><path class="st-tcinvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ashim-light"} {...others} />);
}

export default Component;
