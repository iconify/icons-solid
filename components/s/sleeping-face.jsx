import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbxs5sbdr.css';
import '../../css/y/y2mz8_22j.css';
import '../../css/s/shb3xouel.css';
import '../../css/p/prlka8bch.css';
import '../../css/t/to8i36f5o.css';
import '../../css/k/kssp-db5j.css';
import '../../css/k/kcb01rb6n.css';
import '../../css/u/u-5m7uxew.css';
import '../../css/r/rpvkfqomh.css';
import '../../css/d/dj8-a1bib.css';
import '../../css/i/it4km0kmc.css';
import '../../css/d/dzxkklbda.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zbxs5sbdr"/><path class="y2mz8_22j"/><path class="shb3xouel"/><path class="prlka8bch"/><path class="to8i36f5o"/><path class="kssp-db5j"/><path class="kcb01rb6n"/><path class="u-5m7uxew"/><path class="rpvkfqomh"/><path class="dj8-a1bib"/><path class="it4km0kmc"/><path class="dzxkklbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:sleeping-face"} {...others} />);
}

export default Component;
