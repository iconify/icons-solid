import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbbfuqbum.css';
import '../../css/n/n1uvowbjw.css';
import '../../css/o/o_1vsrx4z.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbbfuqbum"/><path class="n1uvowbjw"/><path class="o_1vsrx4z"/><path class="y9mg2tbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:database-check-48-bold"} {...others} />);
}

export default Component;
