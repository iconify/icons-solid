import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qycvtdjfb.css';
import '../../css/q/qv3q5acwr.css';
import '../../css/k/kezi42cma.css';
import '../../css/o/ovtvrgkrb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGveQDTbzg"><g class="aql7dnt-u"><circle class="qycvtdjfb"/><circle class="qv3q5acwr"/><circle class="kezi42cma"/><path class="ovtvrgkrb"/></g></mask></defs><path mask="url(#SVGveQDTbzg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:every-user"} {...others} />);
}

export default Component;
