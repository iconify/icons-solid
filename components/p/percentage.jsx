import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gi_p70b2p.css';
import '../../css/b/bk5i81qzz.css';
import '../../css/c/ceitnjb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gi_p70b2p"/><circle class="bk5i81qzz"/><circle class="ceitnjb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:percentage"} {...others} />);
}

export default Component;
