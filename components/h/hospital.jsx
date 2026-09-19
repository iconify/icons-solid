import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mfugwt4zs.css';
import '../../css/g/g0lxagb7y.css';
import '../../css/q/qt0k9pbqg.css';
import '../../css/t/tjeo8fbwf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="mfugwt4zs"/><path class="g0lxagb7y"/><path class="qt0k9pbqg"/><path class="tjeo8fbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hospital"} {...others} />);
}

export default Component;
