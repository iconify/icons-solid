import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y50-e9bsi.css';
import '../../css/i/i2s29ccsd.css';
import '../../css/j/jzlsh2blz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y50-e9bsi"/><path class="i2s29ccsd"/><path class="jzlsh2blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:grid-ruler"} {...others} />);
}

export default Component;
