import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5f-ncuco.css';
import '../../css/u/uw7i5bbuk.css';
import '../../css/t/tdqb0gbja.css';
import '../../css/y/y_4-pbcui.css';
import '../../css/m/m5lg2_o2n.css';
import '../../css/c/c1gbigdvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o5f-ncuco"/><path class="uw7i5bbuk"/><circle class="tdqb0gbja"/><circle class="y_4-pbcui"/><circle class="m5lg2_o2n"/><circle class="c1gbigdvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-diff"} {...others} />);
}

export default Component;
