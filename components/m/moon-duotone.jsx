import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kihydrb9x.css';
import '../../css/s/s1r84oshw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kihydrb9x"/><path class="s1r84oshw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:moon-duotone"} {...others} />);
}

export default Component;
