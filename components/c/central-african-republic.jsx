import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scnxzqbwi.css';
import '../../css/d/d73ovybpc.css';
import '../../css/x/x1bqexlpm.css';
import '../../css/t/tbdyvbifa.css';
import '../../css/s/su6gklm_g.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="scnxzqbwi"/><path class="d73ovybpc"/><path class="x1bqexlpm"/><path class="tbdyvbifa"/><path class="su6gklm_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:central-african-republic"} {...others} />);
}

export default Component;
