import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oobsdcc_i.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/flen3tbdj.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVGg38j6bxh" class="oobsdcc_i"/></defs><mask id="SVGgNbYfdiO" class="n1mjunbsu"><use href="#SVGg38j6bxh"/></mask><use href="#SVGg38j6bxh" mask="url(#SVGgNbYfdiO)" class="flen3tbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:data-outline"} {...others} />);
}

export default Component;
