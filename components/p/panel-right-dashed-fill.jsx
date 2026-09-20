import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kzd7r4bws.css';
import '../../css/p/p78u3gzyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kzd7r4bws"/><path class="p78u3gzyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-right-dashed-fill"} {...others} />);
}

export default Component;
