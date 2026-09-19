import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdd5oubow.css';
import '../../css/j/jo17i5bnz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMulGzc6e"><g class="ft5dv1b6b"><path class="hdd5oubow"/><path class="jo17i5bnz"/></g></mask></defs><path mask="url(#SVGMulGzc6e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sun-one"} {...others} />);
}

export default Component;
