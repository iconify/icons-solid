import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b50jzdmup.css';
import '../../css/b/b1u2enx3s.css';
import '../../css/g/g3roa_mfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b50jzdmup"/><path class="b1u2enx3s"/><path class="g3roa_mfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:blogger"} {...others} />);
}

export default Component;
