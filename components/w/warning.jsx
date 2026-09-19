import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xamtaihib.css';
import '../../css/b/bc70y0nuy.css';
import '../../css/o/oqexibvmu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xamtaihib"/><circle class="bc70y0nuy"/><path class="oqexibvmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:warning"} {...others} />);
}

export default Component;
