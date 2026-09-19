import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/ka8m53b1q.css';
import '../../css/z/zez_l90sc.css';
import '../../css/g/gya453bci.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOx5Q8cfB"><g class="rohhhzb0l"><path class="ka8m53b1q"/><path class="zez_l90sc"/><path class="gya453bci"/></g></mask></defs><path mask="url(#SVGOx5Q8cfB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:movie"} {...others} />);
}

export default Component;
