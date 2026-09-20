import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0oztqk0v.css';
import '../../css/y/ypv0m7ebs.css';
import '../../css/b/bot5amt8c.css';
import '../../css/m/mg_tr1b8o.css';
import '../../css/s/skyu0-bky.css';
import '../../css/u/unteshb4x.css';
import '../../css/c/c8y_tibft.css';
import '../../css/c/cdhxgtr7l.css';
import '../../css/g/g3zp5ptlv.css';
import '../../css/c/czh71rbat.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o0oztqk0v"/><path class="ypv0m7ebs"/><path class="bot5amt8c"/><path class="mg_tr1b8o"/><path class="skyu0-bky"/><path class="unteshb4x"/><path class="c8y_tibft"/><path class="cdhxgtr7l"/><path class="g3zp5ptlv"/><path class="czh71rbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:locked-with-key"} {...others} />);
}

export default Component;
