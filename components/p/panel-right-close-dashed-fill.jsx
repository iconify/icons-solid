import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kzd7r4bws.css';
import '../../css/p/p78u3gzyq.css';
import '../../css/l/lx9jc3bxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kzd7r4bws"/><path class="p78u3gzyq"/><path class="lx9jc3bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-right-close-dashed-fill"} {...others} />);
}

export default Component;
