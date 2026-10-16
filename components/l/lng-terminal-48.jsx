import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt0ueeb_n.css';
import '../../css/s/soqe29bkt.css';
import '../../css/x/x5dwb7bic.css';
import '../../css/l/lukygbb6t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pt0ueeb_n"/><path class="soqe29bkt"/><path class="x5dwb7bic"/><path class="lukygbb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-terminal-48"} {...others} />);
}

export default Component;
