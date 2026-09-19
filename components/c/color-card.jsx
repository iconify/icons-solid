import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp_77rmhn.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/turnzi87o.css';
import '../../css/c/cqakgobvy.css';
import '../../css/u/uoi9uoagb.css';
import '../../css/a/a8y4fl3xp.css';
import '../../css/h/h87-x4bpj.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGSJixWdrt" class="fp_77rmhn"/></defs><g class="ft5dv1b6b"><path class="turnzi87o"/><path class="cqakgobvy"/><path class="uoi9uoagb"/><use href="#SVGSJixWdrt" class="a8y4fl3xp"/><use href="#SVGSJixWdrt" class="a8y4fl3xp"/><path class="h87-x4bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:color-card"} {...others} />);
}

export default Component;
