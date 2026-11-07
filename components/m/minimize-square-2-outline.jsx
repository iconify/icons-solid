import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iguslbbqz.css';
import '../../css/s/sb6_ytb3v.css';
import '../../css/f/fr97ndbzp.css';
import '../../css/s/sut2fkboz.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iguslbbqz"/><path class="sb6_ytb3v"/><path class="fr97ndbzp"/><path class="sut2fkboz"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-2-outline"} {...others} />);
}

export default Component;
