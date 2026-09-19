import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6fx3-bru.css';
import '../../css/n/nb-eyybsf.css';
import '../../css/d/drz7i217o.css';
import '../../css/p/ppjdh5n8d.css';
import '../../css/b/bjta2obvc.css';
import '../../css/b/b73w8webg.css';
import '../../css/f/fiklt3b5i.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k6fx3-bru"/><path class="nb-eyybsf"/><path class="drz7i217o"/><path class="ppjdh5n8d"/><path class="bjta2obvc"/><path class="b73w8webg"/><path class="fiklt3b5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:eye"} {...others} />);
}

export default Component;
