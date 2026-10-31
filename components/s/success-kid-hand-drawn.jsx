import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p7j5lxbgv.css';
import '../../css/k/kmgs-ubom.css';
import '../../css/r/rlchs3b9r.css';
import '../../css/r/r9nhzhbxo.css';
import '../../css/y/y4ci6u3br.css';
import '../../css/s/swi3okb8z.css';
import '../../css/d/d2xghzbtq.css';
import '../../css/p/p81x4gb0f.css';
import '../../css/v/v024v9bxy.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p7j5lxbgv"/><path class="kmgs-ubom"/><path class="rlchs3b9r"/><path class="r9nhzhbxo"/><path class="y4ci6u3br"/><path class="swi3okb8z"/><path class="d2xghzbtq"/><path class="p81x4gb0f"/><path class="v024v9bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:success-kid-hand-drawn"} {...others} />);
}

export default Component;
