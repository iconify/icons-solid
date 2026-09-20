import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iobqtibmb.css';
import '../../css/m/mpwpx1vpl.css';
import '../../css/f/fk33t7eqs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iobqtibmb"/><path class="mpwpx1vpl"/><path class="fk33t7eqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-database"} {...others} />);
}

export default Component;
