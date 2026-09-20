import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f13ol0bhi {
  fill: currentColor;
  d: path("M4 20V4h16v6.842q-.244-.148-.484-.247q-.241-.099-.516-.174V5H5v9.616h4.2q.244.713.77 1.203q.524.49 1.232.69q.088.985.47 1.868q.38.883 1.045 1.623zM7.5 8.827h9v-1h-9zm0 3.077h5.214q.309-.321.656-.571t.726-.43H7.5zm8.392 7.287l-.792-.599l1.64-2.26l-2.667-.876l.312-.964l2.673.883v-2.817h1v2.817l2.673-.883l.311.964l-2.667.877l1.64 2.26l-.811.598l-1.646-2.28z");
}
</style><path class="f13ol0bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:inbox-text-asterisk-sharp"} {...others} />);
}

export default Component;
