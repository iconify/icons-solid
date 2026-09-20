import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1rnuy7eq.css';
import '../../css/f/fxuyefsgp.css';
import '../../css/b/b73ocondb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s1rnuy7eq"/><path class="fxuyefsgp"/><path class="b73ocondb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:kettle"} {...others} />);
}

export default Component;
