import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbbfuqbum.css';
import '../../css/n/n1uvowbjw.css';
import '../../css/o/o_1vsrx4z.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbbfuqbum"/><path class="n1uvowbjw"/><path class="o_1vsrx4z"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-x-48-bold"} {...others} />);
}

export default Component;
