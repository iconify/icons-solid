import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rxwhx8i8w.css';
import '../../css/e/e9_m8lzcu.css';
import '../../css/r/r9pdiobtk.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="rxwhx8i8w"/><path class="e9_m8lzcu"/><path class="r9pdiobtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:caution-sign-square"} {...others} />);
}

export default Component;
