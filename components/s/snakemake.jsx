import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai6onkxos.css';
import '../../css/p/puojo9i0c.css';
import '../../css/w/wd2296cyy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ai6onkxos"/><path class="puojo9i0c"/><path class="wd2296cyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:snakemake"} {...others} />);
}

export default Component;
