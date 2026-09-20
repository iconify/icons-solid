import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo7urvgho.css';
import '../../css/s/s5nareudl.css';
import '../../css/j/jfk9ubm9c.css';
import '../../css/i/i5oonfbxc.css';
import '../../css/i/i2n_2vb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="oo7urvgho"/><circle class="s5nareudl"/><circle class="jfk9ubm9c"/><path clip-rule="evenodd" class="i5oonfbxc"/><path class="i2n_2vb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:group-fill"} {...others} />);
}

export default Component;
